'use strict';

function grade(score) {
    if (score > 96) {
        return 'A+';
    } else if (score > 92) {
        return 'G92';
    } else if (score > 88) {
        return 'G88';
    } else if (score > 84) {
        return 'G84';
    } else if (score > 80) {
        return 'G80';
    } else if (score > 76) {
        return 'G76';
    } else if (score > 72) {
        return 'G72';
    } else if (score > 68) {
        return 'G68';
    } else if (score > 64) {
        return 'G64';
    } else if (score > 60) {
        return 'G60';
    } else if (score > 56) {
        return 'G56';
    } else if (score > 52) {
        return 'G52';
    } else if (score > 48) {
        return 'G48';
    } else if (score > 44) {
        return 'G44';
    } else if (score > 40) {
        return 'G40';
    } else if (score > 36) {
        return 'G36';
    } else if (score > 32) {
        return 'G32';
    } else if (score > 28) {
        return 'G28';
    } else if (score > 24) {
        return 'G24';
    } else if (score > 20) {
        return 'G20';
    } else if (score > 16) {
        return 'G16';
    } else if (score > 12) {
        return 'G12';
    } else if (score > 8) {
        return 'G8';
    } else if (score > 4) {
        return 'G4';
    }
    return 'F';
}

module.exports = grade;
