import { Text, Image, Field, withDatasourceCheck, ImageField } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import { JSX } from 'react';

type MapInfoProps = ComponentProps & {
  fields: {
    heading: Field<string>;
    image: ImageField;
  };
};

const MapInfo = (props: MapInfoProps): JSX.Element => (
  <div className="h-100 event-info p-4 shadow rounded bg-white d-flex justify-content-center flex-column">
    <h2 className="text-xl font-bold mb-2">
      <Text field={props.fields.heading} />
    </h2>
    
    <Image className="w-100 object-cover mb-3 rounded" field={props.fields.image}/>
  </div>
);

export default withDatasourceCheck()<MapInfoProps>(MapInfo);
