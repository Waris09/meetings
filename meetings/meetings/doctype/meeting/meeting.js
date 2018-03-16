frappe.ui.form.on("Meeting", {
	send_emails: function(frm) {
		if (frm.doc.status == "Planned") {
			frappe.call({
				method: "meetings.api.send_invitation_emails",
				args: {
					meeting: frm.doc.name
				}
			});
		}
	},
});

frappe.ui.form.on("Meeting Attendee", {
	attendee: function(frm, cdt, cdn) {
		var attendee = frappe.model.get_doc(cdt, cdn);
		if (attendee.attendee){
		    console.log(attendee)	
		    frappe.call({
			   method:"meetings.meetings.doctype.meeting.meeting.get_full_name",
			   args: {
				   attendee: attendee.attendee
			   },
			   callback: function(r) {
				   frappe.model.set_value(cdt, cdn, "full_name", r.message);
			   }   
		    });	
		
	    } else {
		    frappe.model.set_value(cdt, cdn, "full_name", null);
		}	
	},
	send_emails: function(frm) {
		if(frm.doc.status == "Planned"){
			frappe.call({
				method:"meeting.api.send_invitation_emails",
				args: {
					meeting: frm.doc.name

				},
				callback: function(r){
				
				}
			});	
		}
	},	
});

