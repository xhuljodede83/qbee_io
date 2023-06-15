import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
    providedIn: 'root'
})
export class SnackbarService {
    // A snackbar service to show messages to user
    constructor(
        private snackbar: MatSnackBar
    ) { }

    open(message: string) {
        this.snackbar.open(message, '×', {
            duration: 5000
        });
    }
}
