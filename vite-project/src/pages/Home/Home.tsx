import { FC, Suspense, useState, SetStateAction, useMemo, useDeferredValue, useEffect, useTransition } from "react";
import axios from "axios";

import PageWrapper from "../../components/PageWrapper/PageWrapper";
import { PAGE_TITLES } from "../../constants";
import { User } from "../../redux/users.reducer";
import { mockData } from "./MockData";

import css from "./Home.module.css";


const Home: FC = () => {

  const [value, setValue] = useState("");
  const [filteredValue, setFilteredValue] = useState("");
  const [userData, setUserData] = useState<User[] | []>([]);
  const [isPending, startTransition] = useTransition();

  const deferredValue = useDeferredValue(value);

  useEffect(() => {
    const getUserData = async () => {
      const result = await axios.get("https://jsonplaceholder.typicode.com/users");
      result ? setUserData(result.data) : setUserData(mockData);
    };

    getUserData();


  }, []);

  //for render mock data
  // setUserData(mockData);

  const filteredItems = useMemo(() => {
    return userData.filter(item => item.name.toLowerCase().includes(deferredValue));

  }, [deferredValue]);

  const onChangeValue = (e: { target: { value: SetStateAction<string>; }; }) => {
    setValue(e.target.value);
    startTransition(() => {
      setFilteredValue(e.target.value);
    });
  };

  console.log("filteredValue", filteredValue);

  return (
    <PageWrapper pageTitle={PAGE_TITLES.HOME}>
      <h1>Welcome to my Home Page!</h1>
      <input className={css.FilterInput} type={"text"} value={value} onChange={onChangeValue} />
      <div className={css.homeWrapper}>
        {isPending && <h1>Loading ...</h1>}
        <Suspense fallback={<h2>Loading...</h2>}>
          {userData.length ? filteredItems.map((user: User) => (
            <div className={css.DataWrapper} key={user.id}>
              <h2>{user.name}</h2>
              <p>{user.email}</p>
            </div>
          )) : <div>No Data</div>}
        </Suspense>
      </div>
    </PageWrapper>
  );
};

export default Home;


