import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import PageWrapper from '../../components/PageWrapper/PageWrapper';
import FormInput from '../../components/FormInput/FormInput';
import Button, { ButtonsType } from '../../components/Button/Buttons';

import { BUTTONS_TITLE, PAGE_TITLES } from '../../constants';
import { postFormFieldsArr, PostFormValues, PostFormValuesWithFile } from './PostFormFieldsArr';

import css from './Posts.module.css';

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<PostFormValues[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<PostFormValuesWithFile>();

  const onSubmit: SubmitHandler<PostFormValuesWithFile> = data => {
    const url: string = URL.createObjectURL(data.fileURL[0]);

    const reqData: PostFormValues = {
      firstName: data.firstName,
      lastName: data.lastName,
      gender: data.gender,
      phoneNumber: data.phoneNumber,
      fileURL: url,
      ID: data.ID,
    };
    console.log('reqData', reqData);

    setPosts([...posts, reqData]);

    reset();
  };

  return (
    <PageWrapper pageTitle={PAGE_TITLES.POSTS}>
      <div className={css.WrapperPage}>
        <form className={css.FormWrapper} onSubmit={handleSubmit(onSubmit)}>
          <FormInput data={postFormFieldsArr} errors={errors} register={register} />
          <Button
            children={BUTTONS_TITLE.SUBMIT}
            type={ButtonsType.submit}
            className={css.Button}
            disabled={!isValid}
          />
        </form>
        <div className={css.PostWrapper}>
          {posts.length ? (
            posts.map((postItem: PostFormValues, index: number) => (
              <div key={index} className={css.Post}>
                {postItem.fileURL && (
                  <img className={css.UploadFile} src={postItem.fileURL} alt="Selected file" />
                )}
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
