import { Text, Image, RichText, Field, withDatasourceCheck, ImageField, RichTextField } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import { JSX } from 'react';

type EventInfoProps = ComponentProps & {
  fields: {
    image: ImageField;
    heading: Field<string>;
    description: RichTextField;
    genre: RichTextField;
    date: RichTextField;
  };
};

const EventInfo = (props: EventInfoProps): JSX.Element => (
  <div className="event-info p-4 shadow rounded bg-white">
      <Image className="w-100 object-cover mb-3 rounded" field={props.fields.image}  />
      <h2 className="text-xl font-bold mb-2">
        <Text field={props.fields.heading} />
      </h2>
      <RichText className="mb-0" field={props.fields.description} />
      <p className="fw-bold text-gray-600 mb-0">
        <Text field={props.fields.genre} />
      </p>
      <p className="fw-bold text-gray-500">
        <Text field={props.fields.date} />
      </p>
      
    </div>
);

export default withDatasourceCheck()<EventInfoProps>(EventInfo);
