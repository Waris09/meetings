frappe.views.calendar["Meeting"] = {
    field_map: {
        "start": "start",
        "end": "end",
        "id": "name",
        "title": "title",
        "status": "status",
        "allDay": "all_day"
   
    },
    get_events_method: "meetings.api.get_meeting"
}