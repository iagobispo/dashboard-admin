"use client";
import React, { useState } from "react";
import { Calendar as Cld, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "moment/locale/pt-br";
import { useRouter } from "next/navigation";
moment.locale("pt-BR");

const localizer = momentLocalizer(moment);

const Calendar = () => {
  const router = useRouter();
  const [events, setEvents] = useState([
    {
      id: 8,
      title: "ProWine",
      start: new Date(2023, 9, 2),
      end: new Date(2023, 9, 6),
      hex: "#259AE6",
    },
    {
      id: 7,
      title: "Olympia",
      start: new Date(2023, 9, 7),
      end: new Date(2023, 9, 11),
      hex: "#259AE6",
    },
    {
      id: 1,
      title: "Couromoda 2023",
      start: new Date(2023, 9, 23),
      end: new Date(2023, 9, 23),
      hex: "#DC3545",
    },
    {
      id: 2,
      title: "Estetika 2023",
      start: new Date(2023, 9, 23),
      end: new Date(2023, 9, 25),
      hex: "#259AE6",
    },
    {
      id: 3,
      title: "PET",
      start: new Date(2023, 9, 20),
      end: new Date(2023, 9, 23),
      hex: "#FFBA00",
    },
    {
      id: 4,
      title: "VTEX DAY",
      start: new Date(2023, 9, 20),
      end: new Date(2023, 9, 21),
      hex: "#10B981",
    },
  ]);

  const handleEventClick = (event: any) => {
    router.push(`/events/${event.id}`);
  };

  const eventStyleGetter = (event: any) => {
    const backgroundColor = event?.hex; // Define a cor de fundo do evento
    const style = {
      backgroundColor,
      color: "white", // Define a cor do texto do evento
    };

    return {
      style,
    };
  };

  const CalendarToolbar = (toolbar: any) => {
    return (
      <div className="row flex justify-between pb-4">
        <div>
          <button onClick={() => toolbar.onNavigate("PREV")} className="mr-2">
            voltar
          </button>
          <button
            onClick={() => toolbar.onNavigate("NEXT")}
            className="btn btn-back"
          >
            proseguir
          </button>
        </div>
        <label className="label-date">{toolbar.label}</label>

        <div className="filter-container">
          <button className="mr-2" onClick={() => toolbar.onView("day")}>
            Dia
          </button>
          <button className="mr-2" onClick={() => toolbar.onView("week")}>
            Semana
          </button>
          <button onClick={() => toolbar.onView("month")}>Mês</button>
        </div>
      </div>
    );
  };
  return (
    <div>
      <Cld
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 600 }}
        onSelectEvent={handleEventClick}
        eventPropGetter={eventStyleGetter}
        components={{ toolbar: CalendarToolbar }}
      />
    </div>
  );
};

export default Calendar;
