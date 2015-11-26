var ERROR = {

	'CODE': {
        'NO_BUILDING_SELECTED': 0,
        'FOLDER_NOT_EXIST': 1,
        'FOLDER_IS_EMPTY': 2,
        'USER_PERMISSION_DENIED': 3,
        'USER_ACCESS_DENIED': 4,
        'FOLDER_3D_NOT_EXIST': 5,
        'FOLDER_3D_IS_EMPTY': 6,
        'MISSING_3D_CONFIG_FILE': 7,
        'MISSING_3D_MATERIALS_FILE': 8,
        'MISSING_3D_GEOMETRIES': 9,
        'FOLDER_2D_NOT_EXIST': 10,
        'FOLDER_2D_IS_EMPTY': 11,
        'MISSING_2D_GEOMETRIES': 12,
        'undefined': 13,
        'FILE_NOT_FOUND': 14
    },

    'KEY': [
        'NO_BUILDING_SELECTED',
        'FOLDER_NOT_EXIST',
        'FOLDER_IS_EMPTY',
        'USER_PERMISSION_DENIED',
        'USER_ACCESS_DENIED',
        'FOLDER_3D_NOT_EXIST',
        'FOLDER_3D_IS_EMPTY',
        'MISSING_3D_CONFIG_FILE',
        'MISSING_3D_MATERIALS_FILE',
        'MISSING_3D_GEOMETRIES',
        'FOLDER_2D_NOT_EXIST',
        'FOLDER_2D_IS_EMPTY',
        'MISSING_2D_GEOMETRIES',
        'UNDEFINED',
        'FILE_NOT_FOUND'
    ],

    'MESSAGE': {

        'US': [
            'Please select the building to be displayed.',
            'The folder you requested doesn\'t exist.',
            'No model available for the selected building.',
            'You dont have permission to perform this action on this building.',
            'Error trying to login. Please provide a valid session.',
            '3D folder doesn\'t exist.',
            '3D folder is empty',
            '3D config file is missing.',
            '3D materials file is missing.',
            '3D geometries are missing.',
            '2D folder doesn\'t exist.',
            '2D folder is empty',
            '2D geometries are missing',
            'An undefined error ocurred.',
            'The requested file was not found.'
        ],

        'ES': [
            'Porfavor seleccion un edificio para ser mostrado.',
            'La carpeta que intenta acceder no existe.',
            'No existen geometrias para el edificio actual.',
            'No posee permisos para realizar esta accion sobre el edificio actual.',
            'Error intentando iniciar sesion. Debe proveer una sesion valida.',
            'La carpeta 3D no existe.',
            'La carpeta 3D esta vacia.',
            'El archivo de configuracion 3D no existe.',
            'El archivo de materiales 3D no existe.',
            'No existen geometrias 3D para este edificio.',
            'La carpeta 2D no existe.',
            'La carpeta 2D esta vacia.',
            'No existen geometrias 2D para este edificio.',
            'Ocurrio un error indefinido.',
            'El archivo requerido no fue encontrado.'
        ]

    },

};

module.exports = ERROR;