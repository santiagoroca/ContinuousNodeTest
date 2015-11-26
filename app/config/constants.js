var CONSTANTS = {

    'HEADER': {
        'CONTENT_TYPE': 'Content-Type',
        'APP_JSON': 'application/json'
    },

    'ROUTES': {
        'ALL': '*',
        'NRA': '/nra/*',
        'FOLDER': '/nra/folder'
    },

    'CONFIG': {
        'PORT': 8181,
        'ROOTPATH': '/nodeserver/assets/models/',
        'ENCODE': 'UTF-8',
        'LOGFILE': 'logfile.log',
        'ERRORFILE': 'error.log',
        'DEBUG': 'TRUE'
    },

    'EP': {
        'READY': '/socket/ready',
        'ADDITEM': '/model/asset',
        'GEOMETRY_2D': '/model/asset/2d',
        'ERROR': '/socket/error',
        'MATERIAL': '/material/set',
        'CONFIG': '/config/set',
        'ASSET_INFO': '/assets/info'
    },
    
    'EVT': {
        'ALL': '*',
        'REQUEST': 'request',
        'SOCKET': '/socket/*',
        'CLOSE': '/socket/close',
        'REGISTER': '/register',
        'GEOMETRIES':    '/socket/geometries/*',
        'GEOMETRIES_3D': '/socket/geometries/3d/*',
        'CONFIG_3D': '/socket/geometries/3d/config',
        'MATERIAL_3D': '/socket/geometries/3d/material',
        'ASSETS_3D': '/socket/geometries/3d/assets',
        'GEOMETRIES_2D': '/socket/geometries/2d/*',
        'ASSETS_2D': '/socket/geometries/2d/geometries/*',
        'FLOORPLANS_2D': '/socket/geometries/2d/geometries/floorplans',
        'FLOORPLAN_2D': '/socket/geometries/2d/geometries/floorplan',
        'CONFIG_BUILDING': '/socket/configurate/building'
    },

    'ALLOWED': '10.132.110.49',

    'MESSAGES': {
        'ERROR': 'error',
        'FOLDER_NOT_CREATED': 'Error creating folder.',
        'FOLDER_CREATED': 'Folder succesfully created.',
        'FOLDER_EXISTS': 'Folder already exists.',
        'SUCCESS': 'success',
        'ID_NOT_SET': 'Please provide an id.',
        'ID_NOT_VALID': 'The id must be numeric.'
    },

    'UNDEFINED': 'undefined',
    'NUMBER': 'number',
    'FOLDER_2D': '2d/',
    'FOLDER_3D': '3d/',
    'GEOMETRIES': 'geometries/',
    'CONFIG_3D': 'config.js',
    'MATERIAL_3D': 'materials.js',

    'AMOUNT_GEOMETRIES_PER_USER': 10

};

module.exports = CONSTANTS;
