# -*- coding: utf-8 -*-
# Copyright (c) 2018, frappe and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class Meeting(Document):
	def validate(self):
		"""Set Missing names"""
		for attendee in self.attendees:
			if not attendee.full_name:
			    attendee.full_name = get_full_name(attendee.attendee) 

@frappe.whitelist()
def get_full_name(attendee):
	user = frappe.get_doc("User", attendee)
    	frappe.errprint(user)
	return " ".join(filter(None, [user.first_name,user.middle_name, user.last_name]))

