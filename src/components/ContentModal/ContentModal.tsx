import React from 'react';
import moment from 'moment';
import { prepareCoresDataForTable, preparePayloadsDataForTable } from 'features/Launches/helpers';
import { Launch, DATE_FORMAT, CORE_COLUMNS, PAYLOAD_COLUMNS } from 'features/Launches/constants';
import { Table } from 'components/ant/Table';
import { Row, Col, Divider} from 'antd';

interface ContentModalProps {
    missionNames: string[],
    launches: Launch[],
}

export const ContentModal= ({missionNames, launches}: ContentModalProps) => {
    const selectedLaunches = launches.filter((launch:Launch) => {
        return missionNames.includes(launch.mission_name);
    })
    return (
        <div className="content">
            <Row>
                <Col span={4} >
                    <b>Mission Name: </b>
                </Col>
                <Col span={10} >
                    {selectedLaunches[0].mission_name}
                </Col>
                <Col span={10} >
                    {selectedLaunches[1].mission_name}
                </Col>
            </Row>
            <Row>
                <Col span={4} >
                    <b>Launch Success: </b>
                </Col>
                <Col span={10} >
                    {selectedLaunches[0].launch_success ? "Yes" : "No"}
                </Col>
                <Col span={10} >
                    {selectedLaunches[1].launch_success ? "Yes" : "No"}
                </Col>
            </Row>
            <Row>
                <Col span={4} >
                    <b>Launch Date: </b>
                </Col>
                <Col span={10} >
                    {moment(selectedLaunches[0].launch_date_local).format(DATE_FORMAT)}
                </Col>
                <Col span={10} >
                    {moment(selectedLaunches[1].launch_date_local).format(DATE_FORMAT)}
                </Col>
            </Row>
            <Row>
                <Col span={4} >
                    <b>Launch Site: </b>
                </Col>
                <Col span={10} >
                    {selectedLaunches[0].launch_site.site_name_long}
                </Col>
                <Col span={10} >
                    {selectedLaunches[1].launch_site.site_name_long}
                </Col>
            </Row>
            <Row>
                <Col span={4} >
                    <b>Launch Article: </b>
                </Col>
                <Col span={10} >
                    <a rel="noreferrer" target="_blank" href={selectedLaunches[0].links.wikipedia}>
                        See article
                    </a>
                </Col>
                <Col span={10} >
                    <a rel="noreferrer" target="_blank" href={selectedLaunches[1].links.wikipedia}>
                        See article
                    </a>
                </Col>
            </Row>
            <Divider />
            <Row>
                <Col span={4} >
                    <b>Rocket Name: </b>
                </Col>
                <Col span={10} >
                    {selectedLaunches[0].rocket.rocket_name}
                </Col>
                <Col span={10} >
                    {selectedLaunches[1].rocket.rocket_name}
                </Col>
            </Row>
            <Row>
                <Col span={4} >
                    <b>Rocket Type: </b>
                </Col>
                <Col span={10} >
                    {selectedLaunches[0].rocket.rocket_type}
                </Col>
                <Col span={10} >
                    {selectedLaunches[1].rocket.rocket_type}
                </Col>
            </Row>
            <Divider />
            <Row>
                <Col span={4} >
                    <b>Rocket first stage cores: </b>
                </Col>
                <Col span={9}>
                    <Table 
                        dataSource={prepareCoresDataForTable(selectedLaunches[0].rocket.first_stage.cores)}
                        columns={CORE_COLUMNS}
                        pagination={false}
                    />
                </Col>
                <Col span={9} offset={2}>
                    <Table 
                        dataSource={prepareCoresDataForTable(selectedLaunches[1].rocket.first_stage.cores)}
                        columns={CORE_COLUMNS}
                        pagination={false}
                    />
                </Col>
            </Row>
            <Divider />
            <Row>
                <Col span={4} >
                    <b>Rocket second stage payloads: </b>
                </Col>
                <Col span={9}>
                    <Table 
                        dataSource={preparePayloadsDataForTable(selectedLaunches[0].rocket.second_stage.payloads)}
                        columns={PAYLOAD_COLUMNS}
                        pagination={false}
                    />
                </Col>
                <Col span={9} offset={2}>
                    <Table 
                        dataSource={preparePayloadsDataForTable(selectedLaunches[1].rocket.second_stage.payloads)}
                        columns={PAYLOAD_COLUMNS}
                        pagination={false}
                    />
                </Col>
            </Row>
        </div>
    )
}