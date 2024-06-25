import React, { useEffect } from "react";
import { getTitle } from "../services/TitleService";
import { useDispatch, useSelector } from "react-redux";
import { TitleAction } from "../redux/actions/TitleAction";

/*
This view page is only for demo purpose in this we have make use of useDispatch(),useSelector
*/

const ExampleView = () => {
  const dispatch = useDispatch();
  const title = useSelector((state) => state.title.title);

  useEffect(() => {
    loadData();
  });

  const loadData = async () => {
    const response = await getTitle();
    dispatch(TitleAction(response.data));
  };

  return <div>Welcome {title}</div>;
};

export default ExampleView;
