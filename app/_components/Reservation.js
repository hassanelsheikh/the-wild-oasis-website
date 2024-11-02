import { getSettings, getBookedDatesByCabinId } from "@/app/_lib/data_service";
import DateSelector from "./DateSelector";
import ReservationForm from "./ReservationForm";
import { auth } from "../_lib/auth";
import LoginMessage from "./LoginMessage";
export default async function Reservation({ cabin }) {
  const [settings, dates] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin.id),
  ]);

  const session = await auth();

  return (
    <div>
      <DateSelector dates={dates} cabin={cabin} settings={settings} />
      {session?.user ? (
        <ReservationForm cabin={cabin} user={session.user} />
      ) : (
        <LoginMessage />
      )}
    </div>
  );
}
