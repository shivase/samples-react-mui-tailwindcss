import { FC } from 'react';
import * as z from 'zod';

import { Button } from '../../../../components/Elements';
import { Form, TextAreaField } from '../../../../components/Forms';
import { CommentFormInput } from '../../types';

const schema = z.object({
  text: z.string().min(1, 'Required'),
});

type NewCommentFormProps = {
  onAddedComment: (comment: CommentFormInput) => void;
};

export const NewCommentForm: FC<NewCommentFormProps> = (props) => {
  return (
    <Form<CommentFormInput, typeof schema>
      onSubmit={(e) => props.onAddedComment(e)}
      schema={schema}>
      {({ register, formState }) => (
        <>
          <TextAreaField
            label="Text"
            labelClassName="font-bold"
            className="block w-full rounded-md border-[1px] border-solid border-[#c1d1d1] bg-[#f0f0f0] p-1 text-xl text-inherit focus:bg-[#cbf8f8] focus:outline-teal-500"
            error={formState.errors['text']}
            registration={register('text')}
            rows={5}
          />
          <Button type="submit" className="text-xl">
            Add Comment
          </Button>
        </>
      )}
    </Form>
  );
};

//.loading {
//  position: absolute;
//  width: 100%;
//  height: 100%;
//  background-color: rgba(255, 255, 255, 0.7);
//  display: flex;
//  justify-content: center;
//  align-items: center;
//}
