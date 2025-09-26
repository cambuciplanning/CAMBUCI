var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_KMZREDESMETODOCONSTRUTIVOCAMBUCItubulao_projetada_mtodo_construtivo_1 = new ol.format.GeoJSON();
var features_KMZREDESMETODOCONSTRUTIVOCAMBUCItubulao_projetada_mtodo_construtivo_1 = format_KMZREDESMETODOCONSTRUTIVOCAMBUCItubulao_projetada_mtodo_construtivo_1.readFeatures(json_KMZREDESMETODOCONSTRUTIVOCAMBUCItubulao_projetada_mtodo_construtivo_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KMZREDESMETODOCONSTRUTIVOCAMBUCItubulao_projetada_mtodo_construtivo_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KMZREDESMETODOCONSTRUTIVOCAMBUCItubulao_projetada_mtodo_construtivo_1.addFeatures(features_KMZREDESMETODOCONSTRUTIVOCAMBUCItubulao_projetada_mtodo_construtivo_1);
var lyr_KMZREDESMETODOCONSTRUTIVOCAMBUCItubulao_projetada_mtodo_construtivo_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KMZREDESMETODOCONSTRUTIVOCAMBUCItubulao_projetada_mtodo_construtivo_1, 
                style: style_KMZREDESMETODOCONSTRUTIVOCAMBUCItubulao_projetada_mtodo_construtivo_1,
                popuplayertitle: 'KMZ - REDES - METODO CONSTRUTIVO - CAMBUCI — tubulao_projetada_mtodo_construtivo',
                interactive: true,
                title: 'KMZ - REDES - METODO CONSTRUTIVO - CAMBUCI — tubulao_projetada_mtodo_construtivo'
            });
var format_MAPEAMENTO_2 = new ol.format.GeoJSON();
var features_MAPEAMENTO_2 = format_MAPEAMENTO_2.readFeatures(json_MAPEAMENTO_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MAPEAMENTO_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MAPEAMENTO_2.addFeatures(features_MAPEAMENTO_2);
var lyr_MAPEAMENTO_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MAPEAMENTO_2, 
                style: style_MAPEAMENTO_2,
                popuplayertitle: 'MAPEAMENTO',
                interactive: true,
                title: '<img src="styles/legend/MAPEAMENTO_2.png" /> MAPEAMENTO'
            });
var format_PLANO_DE_FURO_3 = new ol.format.GeoJSON();
var features_PLANO_DE_FURO_3 = format_PLANO_DE_FURO_3.readFeatures(json_PLANO_DE_FURO_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PLANO_DE_FURO_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PLANO_DE_FURO_3.addFeatures(features_PLANO_DE_FURO_3);
var lyr_PLANO_DE_FURO_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PLANO_DE_FURO_3, 
                style: style_PLANO_DE_FURO_3,
                popuplayertitle: 'PLANO_DE_FURO',
                interactive: true,
                title: '<img src="styles/legend/PLANO_DE_FURO_3.png" /> PLANO_DE_FURO'
            });
var format_REDE_EXISTENTE_SIGNUS_4 = new ol.format.GeoJSON();
var features_REDE_EXISTENTE_SIGNUS_4 = format_REDE_EXISTENTE_SIGNUS_4.readFeatures(json_REDE_EXISTENTE_SIGNUS_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_REDE_EXISTENTE_SIGNUS_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_REDE_EXISTENTE_SIGNUS_4.addFeatures(features_REDE_EXISTENTE_SIGNUS_4);
var lyr_REDE_EXISTENTE_SIGNUS_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_REDE_EXISTENTE_SIGNUS_4, 
                style: style_REDE_EXISTENTE_SIGNUS_4,
                popuplayertitle: 'REDE_EXISTENTE_SIGNUS',
                interactive: true,
                title: '<img src="styles/legend/REDE_EXISTENTE_SIGNUS_4.png" /> REDE_EXISTENTE_SIGNUS'
            });
var format_REDE_EXECUTADA_5 = new ol.format.GeoJSON();
var features_REDE_EXECUTADA_5 = format_REDE_EXECUTADA_5.readFeatures(json_REDE_EXECUTADA_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_REDE_EXECUTADA_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_REDE_EXECUTADA_5.addFeatures(features_REDE_EXECUTADA_5);
var lyr_REDE_EXECUTADA_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_REDE_EXECUTADA_5, 
                style: style_REDE_EXECUTADA_5,
                popuplayertitle: 'REDE_EXECUTADA',
                interactive: true,
                title: '<img src="styles/legend/REDE_EXECUTADA_5.png" /> REDE_EXECUTADA'
            });

lyr_GoogleRoad_0.setVisible(true);lyr_KMZREDESMETODOCONSTRUTIVOCAMBUCItubulao_projetada_mtodo_construtivo_1.setVisible(true);lyr_MAPEAMENTO_2.setVisible(true);lyr_PLANO_DE_FURO_3.setVisible(true);lyr_REDE_EXISTENTE_SIGNUS_4.setVisible(true);lyr_REDE_EXECUTADA_5.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_KMZREDESMETODOCONSTRUTIVOCAMBUCItubulao_projetada_mtodo_construtivo_1,lyr_MAPEAMENTO_2,lyr_PLANO_DE_FURO_3,lyr_REDE_EXISTENTE_SIGNUS_4,lyr_REDE_EXECUTADA_5];
lyr_KMZREDESMETODOCONSTRUTIVOCAMBUCItubulao_projetada_mtodo_construtivo_1.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Autogenera': 'Autogenera', 'NetworkNam': 'NetworkNam', 'InsideDiam': 'InsideDiam', 'OutsideDia': 'OutsideDia', 'Length': 'Length', 'Slope': 'Slope', 'StartInver': 'StartInver', 'EndInvert': 'EndInvert', 'StructureS': 'StructureS', 'StructureE': 'StructureE', 'PartSizeNa': 'PartSizeNa', 'Rede_Diame': 'Rede_Diame', 'Rede_Exten': 'Rede_Exten', 'Rede_Descr': 'Rede_Descr', 'Rede_Metod': 'Rede_Metod', 'Rede_Local': 'Rede_Local', 'Rede_Pavim': 'Rede_Pavim', 'Rede_Rua': 'Rede_Rua', 'Rede_Bacia': 'Rede_Bacia', 'Carac_Rua': 'Carac_Rua', });
lyr_MAPEAMENTO_2.set('fieldAliases', {'id': 'id', });
lyr_PLANO_DE_FURO_3.set('fieldAliases', {'id': 'id', });
lyr_REDE_EXISTENTE_SIGNUS_4.set('fieldAliases', {'id': 'id', });
lyr_REDE_EXECUTADA_5.set('fieldAliases', {'id': 'id', });
lyr_KMZREDESMETODOCONSTRUTIVOCAMBUCItubulao_projetada_mtodo_construtivo_1.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'Autogenera': '', 'NetworkNam': '', 'InsideDiam': '', 'OutsideDia': '', 'Length': '', 'Slope': '', 'StartInver': '', 'EndInvert': '', 'StructureS': '', 'StructureE': '', 'PartSizeNa': '', 'Rede_Diame': '', 'Rede_Exten': '', 'Rede_Descr': '', 'Rede_Metod': '', 'Rede_Local': '', 'Rede_Pavim': '', 'Rede_Rua': '', 'Rede_Bacia': '', 'Carac_Rua': '', });
lyr_MAPEAMENTO_2.set('fieldImages', {'id': '', });
lyr_PLANO_DE_FURO_3.set('fieldImages', {'id': '', });
lyr_REDE_EXISTENTE_SIGNUS_4.set('fieldImages', {'id': '', });
lyr_REDE_EXECUTADA_5.set('fieldImages', {'id': '', });
lyr_KMZREDESMETODOCONSTRUTIVOCAMBUCItubulao_projetada_mtodo_construtivo_1.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Autogenera': 'no label', 'NetworkNam': 'no label', 'InsideDiam': 'no label', 'OutsideDia': 'no label', 'Length': 'no label', 'Slope': 'no label', 'StartInver': 'no label', 'EndInvert': 'no label', 'StructureS': 'no label', 'StructureE': 'no label', 'PartSizeNa': 'no label', 'Rede_Diame': 'no label', 'Rede_Exten': 'no label', 'Rede_Descr': 'no label', 'Rede_Metod': 'no label', 'Rede_Local': 'no label', 'Rede_Pavim': 'no label', 'Rede_Rua': 'no label', 'Rede_Bacia': 'no label', 'Carac_Rua': 'no label', });
lyr_MAPEAMENTO_2.set('fieldLabels', {'id': 'no label', });
lyr_PLANO_DE_FURO_3.set('fieldLabels', {'id': 'no label', });
lyr_REDE_EXISTENTE_SIGNUS_4.set('fieldLabels', {'id': 'no label', });
lyr_REDE_EXECUTADA_5.set('fieldLabels', {'id': 'no label', });
lyr_REDE_EXECUTADA_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});