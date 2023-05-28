import { FC, useState, useEffect } from "react";
import axios from "axios";

import PageWrapper from "../../components/PageWrapper/PageWrapper";
import { PAGE_TITLES } from "../../constants";
import {  User } from "../../redux/users.reducer";

import css from "./Home.module.css";


const Home: FC = () => {
  const [userData, setUserData] = useState<User[]>([]);
  //
  // const usersDataResolve = useSelector((state: any) => state.users.users);
  //
  // const dispatch = useDispatch();

  useEffect(() => {
    const getUserData = async () => {
      const result = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUserData(result.data);

      // dispatch(getUsersData(result.data));
    };

    getUserData();


  }, []);


  return (
    <PageWrapper pageTitle={PAGE_TITLES.HOME}>
      <h1>Welcome to my Home Page!</h1>
      <div className={css.homeWrapper}>
        {userData.length ? userData.map((user: User) => (
          <div className={css.DataWrapper} key={user.id}>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>
        )) : <div>No Data</div>}
      </div>
    </PageWrapper>
  );
};

export default Home;


