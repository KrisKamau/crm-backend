import Contact from '../models/crmModel';

export const addNewContact = (req, res) => {
    let newContact = new Contact(req.body);

    newContact.save((err, contact) => {
        if(err) {
            res.send(err);
        }
        res.json(contact);
    });
}

export const getContacts = (req, res) => {
    Contact.find({}, (err, contact) => {
        if(err) {
            res.send(err);
        }
        res.json(contact);
    });
    
}

export const getContactWithId = (req, res) => {
    Contact.findById(req.params.contactId, (err, contact) => {
        if(err) {
            res.send(err);
        }
        res.json(contact);
    });
    
}

export const updateContact = (req, res) => {
    Contact.updateOne({ _id: req.params.contactId }, req.body, (err, contact) => {
        if(err) {
            res.send(err);
        }
        res.json(contact);
    });
    
}

export const deleteContact = (req, res) => {
    Contact.deleteOne({ _id: req.params.contactId }, (err, contact) => {
        if(err) {
            res.send(err);
        }
        res.json({ message: "Contact out" });
    });
    
}
