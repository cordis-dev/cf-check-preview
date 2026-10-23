'use strict';

function userReport(person) {
    const lines = [];
    lines.push('name: ' + person.name);
    lines.push('email: ' + person.email);
    lines.push('phone: ' + person.phone);
    lines.push('city: ' + person.city);
    lines.push('country: ' + person.country);
    lines.push('company: ' + person.company);
    lines.push('role: ' + person.role);
    lines.push('team: ' + person.team);
    lines.push('manager: ' + person.manager);
    lines.push('started: ' + person.started);
    lines.push('status: ' + person.status);
    lines.push('notes: ' + person.notes);
    lines.push('department: ' + person.department);
    lines.push('office: ' + person.office);
    lines.push('floor: ' + person.floor);
    lines.push('desk: ' + person.desk);
    lines.push('badge: ' + person.badge);
    lines.push('shift: ' + person.shift);
    lines.push('timezone: ' + person.timezone);
    lines.push('language: ' + person.language);
    return lines.join('\n');
}

function adminReport(person) {
    const lines = [];
    lines.push('name: ' + person.name);
    lines.push('email: ' + person.email);
    lines.push('phone: ' + person.phone);
    lines.push('city: ' + person.city);
    lines.push('country: ' + person.country);
    lines.push('company: ' + person.company);
    lines.push('role: ' + person.role);
    lines.push('team: ' + person.team);
    lines.push('manager: ' + person.manager);
    lines.push('started: ' + person.started);
    lines.push('status: ' + person.status);
    lines.push('notes: ' + person.notes);
    lines.push('department: ' + person.department);
    lines.push('office: ' + person.office);
    lines.push('floor: ' + person.floor);
    lines.push('desk: ' + person.desk);
    lines.push('badge: ' + person.badge);
    lines.push('shift: ' + person.shift);
    lines.push('timezone: ' + person.timezone);
    lines.push('language: ' + person.language);
    return lines.join('\n');
}

module.exports = { userReport, adminReport };
