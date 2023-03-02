import { FC } from 'react';
import * as z from 'zod';

import { Button, Spinner } from '../../../../components/Elements';
import { Form, InputField, TextAreaField } from '../../../../components/Forms';
import { PostQuoteDTO } from '../../api';
import { QuoteFormInput } from '../../types';
import { Card } from '../UI/Card';

const schema = z.object({
  author: z.string().min(1, 'Required'),
  text: z.string().min(1, 'Required'),
});

type QuoteFormProps = {
  onAddQuote: (quote: QuoteFormInput) => void;
  isLoading: boolean;
};

export const QuoteForm: FC<QuoteFormProps> = (props) => {
  if (props.isLoading) {
    return (
      <div className="flex h-48 w-full items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }

  return (
    <Card>
      <Form<PostQuoteDTO, typeof schema> onSubmit={(e) => props.onAddQuote(e)} schema={schema}>
        {({ register, formState }) => (
          <>
            <InputField
              type="text"
              label="Author"
              labelClassName="font-bold"
              fieldClassName="block w-full rounded-md border-[1px] border-solid border-[#c1d1d1] bg-[#f0f0f0] p-1 text-xl text-inherit focus:bg-[#cbf8f8] focus:outline-teal-500 "
              error={formState.errors['author']}
              registration={register('author')}
            />

            <TextAreaField
              label="Text"
              labelClassName="font-bold"
              className="block w-full rounded-md border-[1px] border-solid border-[#c1d1d1] bg-[#f0f0f0] p-1 text-xl text-inherit focus:bg-[#cbf8f8] focus:outline-teal-500 "
              error={formState.errors['text']}
              registration={register('text')}
              rows={5}
            />
            <div className="text-right">
              <Button type="submit" className="text-xl">
                Add Quote
              </Button>
            </div>
          </>
        )}
      </Form>
    </Card>
  );
};
