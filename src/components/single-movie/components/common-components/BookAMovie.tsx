import { useContext, useEffect } from "react";

import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { Modal, Select } from "antd";

import type { SelectProps } from "antd";
import { CheckCircleFilled } from "@ant-design/icons";
import { notification } from "antd";
import type { NotificationArgsProps } from "antd";

import { GlobalContext } from "../../../../context/GlobalContext";
import "./../../../../App.css";

interface IFormInput {
  name: string;
  eMail: string;
  hall: string;
  nrTickets: number;
  seatSelection: Array<string>;
  terms: Array<string>;
}

interface Props {
  movieTitle: string;
}

type NotificationPlacement = NotificationArgsProps["placement"];

export default function BookAMovie(props: Props) {
  const {
    control,
    register,
    handleSubmit,
    reset,
    resetField,
    watch,

    formState: { errors, isSubmitSuccessful },
  } = useForm({
    defaultValues: {
      name: "",
      eMail: "",
      hall: "A",
      nrTickets: 1,
      seatSelection: [],
      terms: [],
    },
  });
  const { isModalOpen, setIsModalOpen } = useContext(GlobalContext);

  const nrTickets = watch("nrTickets");
  const seatSelection = watch("seatSelection");

  const seatRow = ["A", "B", "C"];
  const seatColumn = [1, 2, 3, 4, 5];

  const ticketsPrice = nrTickets * 5;

  const options: SelectProps["options"] = [];
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 5; j++) {
      options.push({
        label: seatRow[i] + seatColumn[j],
        value: seatRow[i] + seatColumn[j],
      });
    }
  }
  const currentTime = new Date();
  const currentDate = currentTime.toDateString();
  const currentHours = currentTime.getHours();
  const currentMin = currentTime.getMinutes();
  let currentMinStr = "";
  if (currentMin < 10) {
    currentMinStr = "0" + currentMin;
  } else {
    currentMinStr = currentMin.toString();
  }

  const [api, contextHolder] = notification.useNotification();

  const openNotification = (placement: NotificationPlacement) => {
    api.open({
      message: " Booking confirmation",
      description: `The movie was successfully booked on ${currentDate}, at ${currentHours}:${currentMinStr}!`,
      placement,
      duration: 7,
      icon: <CheckCircleFilled style={{ color: "green" }} />,
    });
  };

  function handleHallClick() {
    resetField("seatSelection");
  }

  useEffect(() => {
    reset();
    setIsModalOpen(false);
  }, [isSubmitSuccessful]);

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    openNotification("top");
  };

  return (
    <div>
      {contextHolder}

      <Modal
        title={props.movieTitle}
        open={isModalOpen}
        onOk={handleSubmit(onSubmit)}
        onCancel={() => setIsModalOpen(false)}
        footer={[
          <div className="booking-footer">
            <button
              key="confirm"
              onClick={handleSubmit(onSubmit)}
              className="cinema-plus-buttons"
            >
              Confirm Reservation
            </button>
          </div>,
          <br />,
          <p style={{ textAlign: "center", fontSize: "small", color: "gray" }}>
            {" "}
            *This is a simulation of booking a movie! It is not a real cinema
            movie booking!
          </p>,
        ]}
      >
        <form>
          <div>
            <label>Name: </label>
            <input
              {...register("name", {
                required: "Please enter your name!",
                minLength: {
                  value: 4,
                  message: "The name is too short!",
                },
              })}
              placeholder="Enter your name"
              className="cinema-plus-inputs"
            />

            <p className="warnings">{errors.name?.message}</p>
          </div>
          <br />
          <div>
            <label>E-mail: </label>
            <input
              {...register("eMail", {
                required: "Please enter your e-mail!",
                pattern: {
                  value: /^[a-z]+[a-z0-9\._]*@[a-z]+.com$/,
                  message:
                    "The pattern is user@domain.com! The user should start with a lowercase letter, followed by lowercase letters, digits, . , _ ",
                },
              })}
              placeholder="Enter your e-mail"
              className="cinema-plus-inputs"
            />
            <p className="warnings">{errors.eMail?.message}</p>
          </div>
          <br />
          <div>
            <label> Hall:</label>
            <br />
            <input
              {...register("hall")}
              type="radio"
              value="A"
              onClick={handleHallClick}
            />
            <label> Hall A </label>
            <br />
            <input
              {...register("hall")}
              type="radio"
              value="B"
              onClick={handleHallClick}
            />
            <label> Hall B </label>
            <br />
            <input
              {...register("hall")}
              type="radio"
              value="C"
              onClick={handleHallClick}
            />
            <label> Hall C </label>
            <br />
          </div>
          <br />
          <div>
            <label>Number of tickets: </label>
            <select {...register("nrTickets")} className="cinema-plus-inputs">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <br />
          <div>
            <label> Seat selection: </label>
            <Controller
              name="seatSelection"
              control={control}
              rules={{
                validate: {
                  required: (value) => value.length == nrTickets,
                },
              }}
              render={({ field }) => (
                <Select
                  {...field}
                  mode="multiple"
                  allowClear
                  style={{ width: "60%" }}
                  placeholder="Please select the seats!"
                  defaultValue={[]}
                  options={options}
                  maxCount={nrTickets}
                  value={seatSelection}
                />
              )}
            />
            <p className="warnings">
              {" "}
              {errors.seatSelection?.type === "required" &&
                "The number of seats must match the number of tickets!"}
            </p>
          </div>
          <br />
          <p>
            {" "}
            <span style={{ fontWeight: "bold" }}> Note:</span> Payment will be
            made at the cinema box office!
            <br />
            Ticket price: $5.
            <br />
            Price of all tickets: ${ticketsPrice}
          </p>
          <br />
          <input
            {...register("terms", {
              required: "Please accept the terms and conditions!",
            })}
            type="checkbox"
            value="I accept terms and conditions"
            className="cinema-plus-inputs"
          />
          <label> I accept terms and conditions</label>
          <p className="warnings"> {errors.terms?.message}</p>
        </form>
      </Modal>
    </div>
  );
}
