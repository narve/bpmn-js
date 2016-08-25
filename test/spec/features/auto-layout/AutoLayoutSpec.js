'use strict';

require('../../../TestHelper');

/* global bootstrapModeler, inject */

var modelingModule = require('../../../../lib/features/modeling'),
    coreModule = require('../../../../lib/core'),
    autoLayoutModule = require('../../../../lib/features/auto-layout');

describe('features/auto-layout', function() {

  var testModules = [ coreModule, modelingModule, autoLayoutModule ];

  describe('try', function() {

    var diagramXML = require('./tree.bpmn');

    beforeEach(bootstrapModeler(diagramXML, { modules: testModules }));

    it.only('1', inject(function(autoLayout, elementRegistry) {

      var quelle = elementRegistry.get('StartEvent_1');

      autoLayout.layout(quelle);

    }));

  });

});
