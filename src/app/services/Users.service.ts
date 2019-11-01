import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
import { collectExternalReferences } from '@angular/compiler';
import uuid from 'uuid'

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(
        private http: HttpClient,
        private db: AngularFirestore) { }

    private loading: Boolean = false


    getById(id: string) {
        return this.db.collection('users', ref => ref.where('id', '==', id))
            .snapshotChanges()
    }


    create(data) {
        return this.db.collection('users').add({
            id: uuid(),
            ...data
        })
    };


    update(data, id) {
        return this.db.collection("users").doc(id).update({
            ...data
        })
    };


    getall() {
        return this.db.collection('users')
            .snapshotChanges()
    }


    remove(id, next, error) {
        this.db.doc(`users/${id}`).delete().then(value => {
            next(value)
          })
          .catch(err => {
            error(err)
          });
    }


}