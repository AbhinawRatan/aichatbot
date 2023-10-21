import React from 'react';
import { DatasourceType } from '@chaindesk/prisma';

type Props = {
  onSelect: (type: DatasourceType) => any;
};

type DatsourceOption = {
  type: DatasourceType;
};

const options: DatsourceOption[] = [
  {
    type: 'file' as any,
  },
];

const DatasourceOptions = (props: Props) => {
  return (
    <div>
      {options.map((each) => (
        <button
          key={each.type}
          onClick={() => props.onSelect(each.type)}
        >
          File
        </button>
      ))}
    </div>
  );
};

export default DatasourceOptions;
