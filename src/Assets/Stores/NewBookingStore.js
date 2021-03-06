import { configure, makeAutoObservable } from "mobx";

configure({ enforceActions: true });

class NewBookingStore {
  newBookings = [];
  newBooking = null;

  constructor() {
    makeAutoObservable(this);
    this.getNewBookingAsync();
  }

  get NewBooking() {
      return this.newBooking;
  }

  get NewBookings() {
    return this.newBookings;
}
  set NewBooking(booking) {
      this.newBooking = booking;
  }

  getNewBookingAsync = async () => {
    const response = await fetch(`https://uglyrage.com/api/NewBooking/`);
    const data = await response.json();
    this.newBookings = data;
  }

  postNewBooking = async (booking) => {
    const headers = new Headers();
    headers.append("Content-type", "application/json");
    var options = {
      method: "POST",
      headers,
      body: JSON.stringify(booking)
    }
    const request = new Request(`https://uglyrage.com/api/NewBooking/`, options);
    const response = await fetch(request);
    if (response.status !== 204) {
      console.log(response);
    }
    this.getNewBookingAsync();
  }

  deleteBooking = async (id) => {
    const res = await fetch(`https://uglyrage.com/api/Newbooking/${id}`, {
      method: "DELETE",
      mode: "cors",
    });

    if (res.status !== 204) {
      console.log(res);
    }
    this.getNewBookingAsync();
  }
}

export const nbs = new NewBookingStore();
