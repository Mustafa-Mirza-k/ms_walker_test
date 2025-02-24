"use client";
import React, { useEffect } from "react";
import AddUserForm from "../../features/user/add-user-form";
import UserTable from "../../features/user/user-table/user-table";
import { useAppDispatch } from "../../hooks/redux-hook";
import { clearRoles } from "../../redux/slices/roles/get-role-slice";
import { clearUserTableData } from "../../redux/slices/register-user/get-all-user-slice";

const RegisterUser = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    return () => {
      dispatch(clearRoles());
      dispatch(clearUserTableData());
    };
  }, [dispatch]);
  return (
    <>
      <AddUserForm />
      <UserTable />
    </>
  );
};

export default RegisterUser;
