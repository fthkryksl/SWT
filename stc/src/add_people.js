const { MongoClient } = require('mongodb');

// MongoDB-Verbindungs-URI
const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const dbName = process.env.DB_NAME || 'SWT';

// Fiktive Personen für jede Klasse
const supervisors = [
    { name: 'Alice Smith', age: 45 },
    { name: 'Bob Johnson', age: 50 },
    { name: 'Charlie Brown', age: 42 },
    { name: 'Deborah Williams', age: 48 },
    { name: 'Edward Thompson', age: 47 },
];

const hrPersonnel = [
    { name: 'Frank Miller', age: 35 },
    { name: 'Grace Anderson', age: 32 },
    { name: 'Helen Garcia', age: 38 },
    { name: 'Ian Harris', age: 41 },
    { name: 'Jane Phillips', age: 36 },
];

const workers = [
    { name: 'Kevin Adams', age: 25 },
    { name: 'Laura White', age: 28 },
    { name: 'Mark Turner', age: 30 },
    { name: 'Nancy Evans', age: 27 },
    { name: 'Oliver Scott', age: 29 },
];

// Funktion zum Einfügen von Personen in die entsprechenden Kollektionen
async function addPeople() {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        // Verbinden Sie sich mit der MongoDB-Datenbank
        await client.connect();
        console.log('Verbindung zur MongoDB-Datenbank erfolgreich hergestellt.');

        // Wählen Sie Ihre Datenbank aus
        const db = client.db(dbName);

        // Kollektionen für Supervisoren, HR-Personal und Arbeiter auswählen
        const supervisorCollection = db.collection('supervisors');
        const hrCollection = db.collection('hr_personnel');
        const workerCollection = db.collection('workers');

        // Personen in die entsprechenden Kollektionen einfügen
        await supervisorCollection.insertMany(supervisors);
        console.log('Supervisoren wurden hinzugefügt.');

        await hrCollection.insertMany(hrPersonnel);
        console.log('HR-Personal wurde hinzugefügt.');

        await workerCollection.insertMany(workers);
        console.log('Arbeiter wurden hinzugefügt.');
    } catch (error) {
        console.error('Fehler beim Einfügen von Personen:', error);
    } finally {
        // Verbindung zur Datenbank schließen
        await client.close();
        console.log('MongoDB-Verbindung geschlossen.');
    }
}

// Funktion zum Hinzufügen von Personen aufrufen
addPeople();