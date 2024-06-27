'use client';
import '@univerjs/design/lib/index.css';
import '@univerjs/ui/lib/index.css';
import '@univerjs/docs-ui/lib/index.css';
import '@univerjs/sheets-ui/lib/index.css';
import '@univerjs/sheets-formula/lib/index.css';

import { Univer, IWorkbookData, UniverInstanceType } from '@univerjs/core';
import { defaultTheme } from '@univerjs/design';

import { UniverFormulaEnginePlugin } from '@univerjs/engine-formula';
import { UniverRenderEnginePlugin } from '@univerjs/engine-render';

import { UniverUIPlugin } from '@univerjs/ui';

import { UniverDocsPlugin } from '@univerjs/docs';
import { UniverDocsUIPlugin } from '@univerjs/docs-ui';
import { UniverSheetsPlugin } from '@univerjs/sheets';
import { UniverSheetsFormulaPlugin } from '@univerjs/sheets-formula';
import { UniverSheetsUIPlugin } from '@univerjs/sheets-ui';
import { FUniver } from '@univerjs/facade';
import { useEffect, useMemo, useState } from 'react';
import { Button } from '../ui/button';

const Excel = (props: any) => {
    const { onClose } = props;
  const univer = new Univer({
    theme: defaultTheme,
  });

  const data = {
    id: 'xxxla',
    name: '测试',
  };

  univer.registerPlugin(UniverFormulaEnginePlugin);
  univer.registerPlugin(UniverRenderEnginePlugin);
  univer.registerPlugin(UniverUIPlugin, {
    container: 'root',
  });
  univer.registerPlugin(UniverDocsUIPlugin);
  univer.registerPlugin(UniverDocsPlugin, {
    hasScroll: true,
  });

  univer.registerPlugin(UniverSheetsPlugin);
  univer.registerPlugin(UniverSheetsUIPlugin);
  univer.registerPlugin(UniverSheetsFormulaPlugin);
  univer.createUnit(UniverInstanceType.UNIVER_SHEET, data);

  const univerAPI = FUniver.newAPI(univer);

  useEffect(() => {
    if (univerAPI) {
      console.log(univerAPI);
      univerAPI.onCommandExecuted((command) => {
        // Press "Ctrl + Shift + I" to open the console and do some operations then you can see the command
        console.log(command);
      });
    }
  }, [univerAPI]);

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ textAlign: 'right' }}>
        <Button
          onClick={() => {
            // univerAPI
            //   ?.exportXLSXBySnapshot(univerAPI?.getActiveWorkbook()?.getSnapshot())
            //   .then((file) => {
            //     console.log(file);
            //   });
              onClose()
          }}
        >
          导出
        </Button>
      </div>
      <div id="root" style={{ width: '100%', height: '100%' }}></div>
    </div>
  );
};

export default Excel;
