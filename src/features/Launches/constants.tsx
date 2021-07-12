export interface Launch {
    mission_name: string,
    launch_date_local: Date,
    launch_success: boolean,
    launch_site: {
        site_name_long: string
    },
    links: {
        wikipedia: string,
    }
    rocket: {
      rocket_name: string,
      rocket_type: string,
      first_stage: {
          cores: Core[]
      },
      second_stage: {
         payloads: Payloads[]
      }
    }
}

export interface Core {
    core: {
        reuse_count: number,
        status: string,
    },
    flight: number
}

export interface Payloads {
    payload_mass_kg: number,
    payload_type: string
}

export const INITIAL_LAUNCH = {mission_name: 'Not selected', 
launch_date_local: new Date(),
launch_success: false,
launch_site: {
  site_name_long: ''
},
links: {
  wikipedia: ''
},
rocket: {
  rocket_name: '',
rocket_type: '',
  first_stage: {
    cores: [
      {
        flight: 0,
        core: {
          reuse_count: 0,
          status: ''
        }
      }
    ]
  },
  second_stage: {
    payloads: [
        {
            payload_mass_kg: 0,
            payload_type: ''
        }
    ] 
 }
}
};

export const DATE_FORMAT = 'MMMM Do YYYY, h:mm:ss a';

export const ColumnLaunchKeys = {
    LAUNCH_NAME: 'name',
    LAUNCH_DATE: 'date',
    LAUNCH_SUCCESS: 'success',
    LAUNCH_SITE: 'site', 
    LAUNCH_LINK: 'link',
    LAUNCH_ROCKET_NAME: 'rocket_name',
    LAUNCH_ROCKET_TYPE: 'rocket_type',
    LAUNCH_ROCKET_FIRST_STAGE: 'first_state',
    LAUNCH_ROCKET_SECOND_STAGE: 'second_stage'
  };

export const ColumnLaunchWidths = {
    LAUNCH_NAME: 150,
    LAUNCH_DATE: 250,
    LAUNCH_SUCCESS: 100,
    LAUNCH_SITE: 500,
    LAUNCH_LINK: 100,
    LAUNCH_ROCKET_NAME: 120,
    LAUNCH_ROCKET_TYPE: 120,
    LAUNCH_ROCKET_FIRST_STAGE: 120,
    LAUNCH_ROCKET_SECOND_STAGE: 130
}

export const LAUNCHES_COLUMNS = [
    {
        title: 'NAME',
        label: 'NAME',
        dataIndex: ColumnLaunchKeys.LAUNCH_NAME,
        key: ColumnLaunchKeys.LAUNCH_NAME,
        width: ColumnLaunchWidths.LAUNCH_NAME,
        fixed: 'left'
    },
    {
        title: 'DATE',
        label: 'DATE',
        dataIndex: ColumnLaunchKeys.LAUNCH_DATE,
        key: ColumnLaunchKeys.LAUNCH_DATE,
        width: ColumnLaunchWidths.LAUNCH_DATE
    },
    {
        title: 'ARTICLE',
        label: 'ARTICLE',
        dataIndex: ColumnLaunchKeys.LAUNCH_LINK,
        key: ColumnLaunchKeys.LAUNCH_LINK,
        width: ColumnLaunchWidths.LAUNCH_LINK,
    },
    {
        title: 'LAUNCH SITE',
        label: 'LAUNCH SITE',
        dataIndex: ColumnLaunchKeys.LAUNCH_SITE,
        key: ColumnLaunchKeys.LAUNCH_SITE,
        width: ColumnLaunchWidths.LAUNCH_SITE,
    },
    {
        title: 'ROCKET',
        label: 'ROCKET',
        children: [
            {
                title: 'NAME',
                label: 'NAME',
                dataIndex: ColumnLaunchKeys.LAUNCH_ROCKET_NAME,
                key: ColumnLaunchKeys.LAUNCH_ROCKET_NAME,
                width: ColumnLaunchWidths.LAUNCH_ROCKET_NAME
            },
            {
                title: 'TYPE',
                label: 'TYPE',
                dataIndex: ColumnLaunchKeys.LAUNCH_ROCKET_TYPE,
                key: ColumnLaunchKeys.LAUNCH_ROCKET_TYPE,
                width: ColumnLaunchWidths.LAUNCH_ROCKET_TYPE
            },
            {
                title: 'FIRST STAGE',
                label: 'FIRST STAGE',
                dataIndex: ColumnLaunchKeys.LAUNCH_ROCKET_FIRST_STAGE,
                key: ColumnLaunchKeys.LAUNCH_ROCKET_FIRST_STAGE,
                width: ColumnLaunchWidths.LAUNCH_ROCKET_FIRST_STAGE
            },
            {
                title: 'SECOND STAGE',
                label: 'SECOND STAGE',
                dataIndex: ColumnLaunchKeys.LAUNCH_ROCKET_SECOND_STAGE,
                key: ColumnLaunchKeys.LAUNCH_ROCKET_SECOND_STAGE,
                width: ColumnLaunchWidths.LAUNCH_ROCKET_SECOND_STAGE
            }
        ]
    },
    {
        title: 'SUCCESS',
        label: 'SUCCESS',
        dataIndex: ColumnLaunchKeys.LAUNCH_SUCCESS,
        key: ColumnLaunchKeys.LAUNCH_SUCCESS,
        width: ColumnLaunchWidths.LAUNCH_SUCCESS,
        fixed: 'right'
    }
]

// constants for First Stage 

export const ColumnCoreKeys = {
    CORE_STATUS: 'status',
    CORE_REUSE_COUNT: 'reuse',
    CORE_FLIGTHS: 'fligTHs',
  };

  export const ColumnCoreWidths = {
    CORE_STATUS: 100,
    CORE_REUSE_COUNT: 100,
    CORE_FLIGTHS: 100,
}

export const CORE_COLUMNS = [
    {
        title: 'STATUS',
        label: 'STATUS',
        dataIndex: ColumnCoreKeys.CORE_STATUS,
        key: ColumnCoreKeys.CORE_STATUS,
        width: ColumnCoreWidths.CORE_STATUS,
    },
    {
        title: 'FLIGHT',
        label: 'FLIGHT',
        dataIndex: ColumnCoreKeys.CORE_FLIGTHS,
        key: ColumnCoreKeys.CORE_FLIGTHS,
        width: ColumnCoreWidths.CORE_FLIGTHS,
    },
    {
        title: 'REUSE COUNT',
        label: 'REUSE COUNT',
        dataIndex: ColumnCoreKeys.CORE_REUSE_COUNT,
        key: ColumnCoreKeys.CORE_REUSE_COUNT,
        width: ColumnCoreWidths.CORE_REUSE_COUNT,
    }
];

//constants for Second Stage

export const ColumnPayloadKeys = {
    PAYLOAD_TYPE: 'type',
    PAYLOAD_MASS: 'mass' 
  };

  export const ColumnPayloadWidths = {
    PAYLOAD_TYPE: 150,
    PAYLOAD_MASS: 150 
}

export const PAYLOAD_COLUMNS = [
    {
        title: 'TYPE',
        label: 'TYPE',
        dataIndex: ColumnPayloadKeys.PAYLOAD_TYPE,
        key: ColumnPayloadKeys.PAYLOAD_TYPE,
        width: ColumnPayloadKeys.PAYLOAD_TYPE,
    },
    {
        title: 'MASS (KG)',
        label: 'MASS (KG)',
        dataIndex: ColumnPayloadKeys.PAYLOAD_MASS,
        key: ColumnPayloadKeys.PAYLOAD_MASS,
        width: ColumnPayloadKeys.PAYLOAD_MASS,
    } 
];