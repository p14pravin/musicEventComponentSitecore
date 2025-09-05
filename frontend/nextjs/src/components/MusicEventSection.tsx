import { Text, Field, Placeholder, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import { JSX } from 'react';

type MusicEventSectionProps = ComponentProps & {
  fields: {
    heading: Field<string>;
  };
};

const MusicEventSection = (props: MusicEventSectionProps): JSX.Element => {
  const layoutMode = (props.params?.layoutMode as string) || '3';
  const isTwoCol = layoutMode === '2';
  return(
    <>
    <h2 className='my-4'>
      <Text field={props.fields.heading} />
    </h2>
    <div className={`mes-grid ${isTwoCol ? 'cols-2' : 'cols-3'}`}>
        
        <div className="mes-col">
          <Placeholder name="col1" rendering={props.rendering} />
        </div>
        <div className="mes-col">
          <Placeholder name="col2" rendering={props.rendering} />
        </div>
        {!isTwoCol && (
          <div className="mes-col">
            <Placeholder name="col3" rendering={props.rendering} />
          </div>
        )}
      </div>
    </>
)};

export default withDatasourceCheck()<MusicEventSectionProps>(MusicEventSection);
