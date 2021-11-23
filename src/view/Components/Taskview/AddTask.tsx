import * as React from "react";
import { useForm } from "react-hook-form";
import { Trans } from 'react-i18next';

type FormData = {
  title: string;
};

export default function Index(props: any) {
  console.log(props)
  const { register, setValue, handleSubmit, formState: { errors } } = useForm<FormData>();
  const onSubmit = handleSubmit(data => {
    const url = "https://habitica.com/api/v4/tasks/user"
    const response = fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "x-client": "278e719e-5f9c-43b1-9dba-8b73343dc062-HabiticaSync",
        "x-api-user": this.app.plugins.plugins["obsidian-habitica-integration"].settings.userID,
        "x-api-key": this.app.plugins.plugins["obsidian-habitica-integration"].settings.apiToken,
      },
      body: JSON.stringify({ type: props.type, text: data.title })
    })
  })
  return (
    <form className="add-task-input" onSubmit={onSubmit}>
      <input type="text" defaultValue="" {...register("title")}></input>
      <button className="submit-button" type="submit" ><Trans>submit</Trans></button>
    </form>
  );
}