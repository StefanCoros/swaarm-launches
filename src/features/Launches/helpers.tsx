import { ColumnLaunchKeys, ColumnCoreKeys, ColumnPayloadKeys, Launch, Core, Payloads, DATE_FORMAT } from './constants';
import moment from 'moment';

export const prepareLaunchesDataForTable = (launches: Launch[], openStageModal: (launch: Launch, stageType: string) => void) => {
    return launches.map(launch => {
      return {
        key: launch.mission_name,
        [ColumnLaunchKeys.LAUNCH_NAME]: launch.mission_name,
        [ColumnLaunchKeys.LAUNCH_DATE]: moment(launch.launch_date_local).format(DATE_FORMAT),
        [ColumnLaunchKeys.LAUNCH_LINK]: <a rel="noreferrer" target="_blank" href={launch.links.wikipedia}>See article</a>,
        [ColumnLaunchKeys.LAUNCH_SITE]: launch.launch_site.site_name_long,
        [ColumnLaunchKeys.LAUNCH_SITE]: launch.launch_site.site_name_long,
        [ColumnLaunchKeys.LAUNCH_ROCKET_NAME]: launch.rocket.rocket_name,
        [ColumnLaunchKeys.LAUNCH_ROCKET_TYPE]: launch.rocket.rocket_type,
        [ColumnLaunchKeys.LAUNCH_ROCKET_TYPE]: launch.rocket.rocket_type,
        [ColumnLaunchKeys.LAUNCH_ROCKET_FIRST_STAGE]: <button onClick={() => openStageModal(launch, 'firstStage')}>See cores</button>,
        [ColumnLaunchKeys.LAUNCH_ROCKET_SECOND_STAGE]: <button onClick={() => openStageModal(launch, 'secondStage')}>See payloads</button>,
        [ColumnLaunchKeys.LAUNCH_SUCCESS]: launch.launch_success ? "Yes" : "No"
      };
    });
  };

  export const prepareCoresDataForTable = (cores:Core[]) => {
    return cores.map(core => {
      return {
        key: `${core.flight}-${core.core.reuse_count}-${core.core.status}`,
        [ColumnCoreKeys.CORE_STATUS]: core.core.status,
        [ColumnCoreKeys.CORE_FLIGTHS]: core.flight,
        [ColumnCoreKeys.CORE_REUSE_COUNT]: core.core.reuse_count
      }
    })
  }

  export const preparePayloadsDataForTable = (payloads:Payloads[]) => {
    return payloads.map(payload => {
      return {
        key: `${payload.payload_mass_kg}-${payload.payload_type}`,
        [ColumnPayloadKeys.PAYLOAD_TYPE]: payload.payload_type,
        [ColumnPayloadKeys.PAYLOAD_MASS]: payload.payload_mass_kg,
      }
    })
  }