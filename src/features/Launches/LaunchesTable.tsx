import React, {useState, useEffect} from 'react';
import useDebounce from 'utils/hooks/useDebounce';

import { Table } from 'components/ant/Table';
import { Input } from 'components/ant/Input';
import { Modal } from 'components/ant/Modal';
import { Alert, Button } from 'antd';
import { ContentModal } from 'components/ContentModal';

import { prepareLaunchesDataForTable, prepareCoresDataForTable, preparePayloadsDataForTable } from 'features/Launches/helpers';
import { LAUNCHES_COLUMNS, CORE_COLUMNS, PAYLOAD_COLUMNS, Launch, INITIAL_LAUNCH } from 'features/Launches/constants';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import styles from './LaunchesTable.module.scss';

interface LaunchesTableProps {
  launches: never[],
  isLoadingLaunches: boolean,
}
export const LaunchesTable = ({launches, isLoadingLaunches}: LaunchesTableProps) => {
  const [filteredLaunces, setFilteredLaunches] = useState([]);
  const [selectedLaunches, setSelectedLaunches] = useState([]);
  const [searchMissionNameText, setSearchMissionNameText] = useState('');
  const [searchRocketNameText, setSearchRocketNameText] = useState('');
  const debouncedSearchMissionNameText = useDebounce(searchMissionNameText, 300);
  const debouncedSearchRocketNameText = useDebounce(searchRocketNameText, 300);
  const [selectedLaunchForDetails, setSelectedLaunchForDetails] = useState(INITIAL_LAUNCH);
  const [showModal, setShowModal] = useState('');

  useEffect(() => {
    const newFilteredLaunches = launches.filter((launch:Launch) => {
      const missionNameCondition =  ((debouncedSearchMissionNameText.length && launch.mission_name.toLowerCase().includes(debouncedSearchMissionNameText)) || 
        !debouncedSearchMissionNameText.length);
      const rocketNameCondition = ((debouncedSearchRocketNameText.length && launch.rocket.rocket_name.toLowerCase().includes(debouncedSearchRocketNameText)) || 
        !debouncedSearchRocketNameText.length);
      return missionNameCondition && rocketNameCondition;
    });
    setSelectedLaunches([]);
    setFilteredLaunches(newFilteredLaunches);
  }, [launches, debouncedSearchMissionNameText, debouncedSearchRocketNameText]);

  const handleFilterTextChange = (newFilter:any) => {
    const {target: {value, id}} = newFilter;
    if(id ==='mission_name' ){
      setSearchMissionNameText(value) 
    } else {
      setSearchRocketNameText(value)
    }
  }

  const onSelectChange = (selectedRowKeys:never[]) => {
    setSelectedLaunches([...selectedRowKeys]);
  };

  const rowSelection = {
    selectedRowKeys: selectedLaunches,
    onChange: onSelectChange,
    getCheckboxProps: (record:any) => ({ name: record.name })
  };

  const openComparingModal = () => {
    setShowModal('comparing');
  }

  const openStageModal = (launch: Launch, stageType: string) => {
    setSelectedLaunchForDetails(launch);
    setShowModal(stageType);
  }

  const closeComparingModal = () => {
    setShowModal('');
  }
  
  return (
      <div className={styles.launchesContainer} >
        <Modal
          visible={showModal === 'comparing'}
          title={`${selectedLaunches[0]} vs. ${selectedLaunches[1]}`}
          onCancel={closeComparingModal}
          maskClosable={false}
          width={900}
          footer={null}
        >
          <ContentModal 
            missionNames={[selectedLaunches[0], selectedLaunches[1]]}
            launches={launches}
          />
        </Modal>     
        <Modal
          title={showModal === 'firstStage' ?
            `First Stage Cores for ${selectedLaunchForDetails.mission_name}` :
            `Second Stage Payloads for ${selectedLaunchForDetails.mission_name}`}
          visible={['firstStage', 'secondStage'].includes(showModal)}
          onCancel={closeComparingModal}
          maskClosable={false}
          footer={null}
        >
          <Table 
            dataSource={showModal === 'firstStage' ?
              prepareCoresDataForTable(selectedLaunchForDetails.rocket.first_stage.cores): 
              preparePayloadsDataForTable(selectedLaunchForDetails.rocket.second_stage.payloads)}
            columns={showModal === 'firstStage' ? CORE_COLUMNS : PAYLOAD_COLUMNS}
            pagination={false}
          />
        </Modal>
        <Alert
          message="You can compare 2 launches by selecting them from the table and clicking the 'Compare' button."
          type="info"
          showIcon
        />
        <Button
          type="primary"
          disabled={selectedLaunches.length !== 2}
          onClick={openComparingModal}
        >
          Compare
        </Button>
        <div className={styles.filterRow}>
          <div className={styles.fiterWrapper}>
            <span className={styles.searchLens}>
              <FontAwesomeIcon icon={faSearch} />
            </span>            
            <Input.Search
              id='mission_name'
              placeholder='Search by mission name'
              onChange={handleFilterTextChange}
            />
            <span className={styles.searchLens}>
              <FontAwesomeIcon icon={faSearch} />
            </span>
            <Input.Search
              id='rocket_name'
              placeholder='Search by rocket name'
              onChange={handleFilterTextChange}
            />
          </div>
          <div className={styles.tableNumbers}>
            <span className={styles.counterFiltered}>
              {`${filteredLaunces.length} ${filteredLaunces.length === 1 ? 'launch' : 'launches'}`}
            </span>
            <span className={styles.counterSelected}>
              {`${selectedLaunches.length} selected`}
            </span>
          </div>
          
        </div>
        
        <Table 
            dataSource={prepareLaunchesDataForTable(filteredLaunces, openStageModal)}
            rowSelection={{
              type: 'checkbox',
              ...rowSelection
            }}
            columns={LAUNCHES_COLUMNS}
            loading={isLoadingLaunches}
            bordered
            size="middle"
            scroll={{ x: 1400}}
        />
      </div>
  );
}