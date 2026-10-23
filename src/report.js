'use strict';

function userReport(person) {
    const lines = [];
    lines.push('Name: ' + person.name);
    lines.push('Email: ' + person.email);
    lines.push('Phone: ' + person.phone);
    lines.push('City: ' + person.city);
    lines.push('Country: ' + person.country);
    lines.push('Company: ' + person.company);
    lines.push('Role: ' + person.role);
    lines.push('Team: ' + person.team);
    lines.push('Manager: ' + person.manager);
    lines.push('Started: ' + person.started);
    lines.push('Status: ' + person.status);
    lines.push('Notes: ' + person.notes);
    return lines.join('\n');
}

function adminReport(person) {
    const lines = [];
    lines.push('Name: ' + person.name);
    lines.push('Email: ' + person.email);
    lines.push('Phone: ' + person.phone);
    lines.push('City: ' + person.city);
    lines.push('Country: ' + person.country);
    lines.push('Company: ' + person.company);
    lines.push('Role: ' + person.role);
    lines.push('Team: ' + person.team);
    lines.push('Manager: ' + person.manager);
    lines.push('Started: ' + person.started);
    lines.push('Status: ' + person.status);
    lines.push('Notes: ' + person.notes);
    return lines.join('\n');
}

module.exports = { userReport, adminReport };
