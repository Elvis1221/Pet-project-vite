import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import PageWrapper from '../../components/PageWrapper/PageWrapper';
import FormInput from '../../components/FormInput/FormInput';
import Button, { ButtonsType } from '../../components/Button/Buttons';

import { BUTTONS_TITLE, PAGE_TITLES, randomUuid } from '../../constants';
import { postFormFieldsArr, PostFormValues } from './PostFormFieldsArr';

import css from './Posts.module.css';

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<PostFormValues[]>([]);
  const [selectedFile, setSelectedFile] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<PostFormValues>();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFile(URL.createObjectURL(event.target.files![0]));
  };

  console.log('handleFileChange', handleFileChange);

  const onSubmit: SubmitHandler<PostFormValues> = data => {
    const reqData: any = {
      firstName: data.firstName,
      lastName: data.lastName,
      gender: data.gender,
      phoneNumber: data.phoneNumber,
      photo: data.photo[0],
      ID: randomUuid,
    };

    posts.push(reqData);
    reset();
  };

  console.log('posts', posts);

  return (
    <PageWrapper pageTitle={PAGE_TITLES.POSTS}>
      <div className={css.WrapperPage}>
        <form className={css.FormWrapper} onSubmit={handleSubmit(onSubmit)}>
          <FormInput
            data={postFormFieldsArr}
            errors={errors}
            register={register}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              handleFileChange(event);
              register('photo');
            }}
          />
          <Button
            children={BUTTONS_TITLE.SUBMIT}
            type={ButtonsType.submit}
            className={css.Button}
          />
        </form>
        <div className={css.PostWrapper}>
          {posts.length ? (
            posts.map((postItem: PostFormValues) => (
              <div className={css.Post}>
                {selectedFile && <img src={selectedFile} alt="Selected file" />}
                <h3>{postItem.firstName}</h3>
                <h3>{postItem.lastName}</h3>
                <h3>{postItem.phoneNumber}</h3>
                <h3>{postItem.gender}</h3>
              </div>
            ))
          ) : (
            <p className={css.NoPost}>NO POSTS</p>
          )}
        </div>
      </div>
    </PageWrapper>
  );
};

export default Posts;
