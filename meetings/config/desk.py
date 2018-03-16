from __future__ import unicode_literals
from frappe import _

def get_data():
    return [
        {
            "label": _("Tools"),
            "icons": "octicon octiocon-briefcase",
            "items": [
                {
                    "type":"doctype",
                    "name":"Meeting",
                    "label": _("Meetings"),
                    "description":_("prepare agenda, invite users and record minutes"),
                },
            ]
        }
    ]    