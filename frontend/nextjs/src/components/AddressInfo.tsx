import { Text, Field, RichText, withDatasourceCheck, RichTextField } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import { JSX } from 'react';

type AddressInfoProps = ComponentProps & {
  fields: {
    heading1: Field<string>;
    address: RichTextField;
    heading2: Field<string>;
    contact: Field<string>;
  };
};

const AddressInfo = (props: AddressInfoProps): JSX.Element => (
  
    <div className="h-100 event-info p-4 shadow rounded bg-white d-flex justify-content-center flex-column">
          
          <h2 className="text-xl font-bold mb-2">
            <Text field={props.fields.heading1} />
          </h2>
          <RichText className="mb-0" field={props.fields.address} />
          <h2 className="text-xl font-bold mb-2">
            <Text field={props.fields.heading2} />
          </h2>
          <p className="fw-bold text-gray-500">
            <Text field={props.fields.contact} />
          </p>
          
        </div>
  
);

export default withDatasourceCheck()<AddressInfoProps>(AddressInfo);
