import { LoremIpsum } from "lorem-ipsum";

const lipsum = new LoremIpsum({
    sentencesPerParagraph: {
        max: 8,
        min: 4
    },
    wordsPerSentence: {
        max: 16,
        min: 4
    }
});

export default {
    "contact": {
        "groups": [
            {
                "id": 1,
                "title": "Starred",
                "count": 2,
                "contacts": []
            },
            {
                "id": 2,
                "title": "Others",
                "count": 6,
                "contacts": []
            }
        ],
        "contacts": [
            {
                "firstname": "Rais",
                "lastname": "Yassin",
                "email": "yassine@rais.me",
                "phone": "06 01 02 03 04",
                "fax": "03 24 65 89 78",
                "city": "Reims",
                "status": 0,
                "id": 1,
                "group_id": 1
            },
            {
                "id": 2,
                "firstname": "Rais",
                "lastname": "Yassin",
                "email": "yassine@rais.me",
                "phone": "06 01 02 03 04",
                "fax": "03 24 65 89 78",
                "city": "Reims",
                "status": 0,
                "group_id": 1
            },
            {
                "firstname": "Rais",
                "lastname": "Yassin",
                "email": "yassine@rais.me",
                "phone": "06 01 02 03 04",
                "fax": "03 24 65 89 78",
                "city": "Reims",
                "status": 0,
                "id": 1,
                "group_id": 2
            },
            {
                "id": 2,
                "firstname": "Rais",
                "lastname": "Mohammed",
                "email": "yassine@rais.me",
                "phone": "06 01 02 03 04",
                "fax": "03 24 65 89 78",
                "city": "Reims",
                "status": 0,
                "group_id": 2
            },
            {
                "id": 3,
                "firstname": "Rais",
                "lastname": "Remy",
                "email": "yassine@rais.me",
                "phone": "06 01 02 03 04",
                "fax": "03 24 65 89 78",
                "city": "Reims",
                "status": 0,
                "group_id": 2
            },
            {
                "id": 4,
                "firstname": "Papriko",
                "lastname": "Albero",
                "email": "alberto@rais.me",
                "phone": "06 01 02 03 04",
                "fax": "03 24 65 89 78",
                "city": "Reims",
                "status": 0,
                "group_id": 2
            },
            {
                "id": 5,
                "firstname": "Rais",
                "lastname": "Yassin",
                "email": "yassine@rais.me",
                "phone": "06 01 02 03 04",
                "fax": "03 24 65 89 78",
                "city": "Reims",
                "status": 0,
                "group_id": 2
            }
        ]
    },
    "discussion": {
        "list": [
            {
                "id": 1,
                "firstname": lipsum.generateWords(1),
                "lastname": lipsum.generateWords(1)
            },
            {
                "id": 2,
                "firstname": lipsum.generateWords(1),
                "lastname": lipsum.generateWords(1)
            },
            {
                "id": 3,
                "firstname": lipsum.generateWords(1),
                "lastname": lipsum.generateWords(1)
            }
        ],
        "messages": []
    },
    "meetings": {
        "list": [
            {
                id: 1,
                title: "Math Cours", color: '#212534', startTime: (Date.now() / 1000 + 3600 * 3), endTime: (Date.now() / 1000 + 3600 * 4), members: [
                    { id: Math.random(), fullname: lipsum.generateWords(2), avatar: 'https://picsum.photos/300/300?i=' + Math.floor(Math.random() * 6) },
                    { id: Math.random(), fullname: lipsum.generateWords(2), avatar: 'https://picsum.photos/300/300?i=' + Math.floor(Math.random() * 6) },
                    { id: Math.random(), fullname: lipsum.generateWords(2), avatar: 'https://picsum.photos/300/300?i=' + Math.floor(Math.random() * 6) }]
            },
            {
                id: 2,
                title: "English Exam", color: '#212534', startTime: (Date.now() / 1000 + 3600 * 3), endTime: (Date.now() / 1000 + 3600 * 4), members: [
                    { id: Math.random(), fullname: lipsum.generateWords(2), avatar: 'https://picsum.photos/300/300?i=' + Math.floor(Math.random() * 6) },
                    { id: Math.random(), fullname: lipsum.generateWords(2), avatar: 'https://picsum.photos/300/300?i=' + Math.floor(Math.random() * 6) },
                    { id: Math.random(), fullname: lipsum.generateWords(2), avatar: 'https://picsum.photos/300/300?i=' + Math.floor(Math.random() * 6) },
                    { id: Math.random(), fullname: lipsum.generateWords(2), avatar: 'https://picsum.photos/300/300?i=' + Math.floor(Math.random() * 6) },
                    { id: Math.random(), fullname: lipsum.generateWords(2), avatar: 'https://picsum.photos/300/300?i=' + Math.floor(Math.random() * 6) },
                    { id: Math.random(), fullname: lipsum.generateWords(2), avatar: 'https://picsum.photos/300/300?i=' + Math.floor(Math.random() * 6) },
                    { id: Math.random(), fullname: lipsum.generateWords(2), avatar: 'https://picsum.photos/300/300?i=' + Math.floor(Math.random() * 6) },
                    { id: Math.random(), fullname: lipsum.generateWords(2), avatar: 'https://picsum.photos/300/300?i=' + Math.floor(Math.random() * 6) }]
            },
            {
                id: 3,
                title: "Company Creation", color: '#212534', startTime: (Date.now() / 1000 + 3600 * 3), endTime: (Date.now() / 1000 + 3600 * 4), members: [
                    { id: Math.random(), fullname: lipsum.generateWords(2), avatar: 'https://picsum.photos/300/300?i=' + Math.floor(Math.random() * 6) },
                    { id: Math.random(), fullname: lipsum.generateWords(2), avatar: 'https://picsum.photos/300/300?i=' + Math.floor(Math.random() * 6) },
                    { id: Math.random(), fullname: lipsum.generateWords(2), avatar: 'https://picsum.photos/300/300?i=' + Math.floor(Math.random() * 6) }]
            },
            {
                id: 4,
                title: "Graduate Program", color: '#212534', startTime: (Date.now() / 1000 + 3600 * 3), endTime: (Date.now() / 1000 + 3600 * 4), members: [
                    { id: Math.random(), fullname: lipsum.generateWords(2), avatar: 'https://picsum.photos/300/300?i=' + Math.floor(Math.random() * 6) },
                    { id: Math.random(), fullname: lipsum.generateWords(2), avatar: 'https://picsum.photos/300/300?i=' + Math.floor(Math.random() * 6) },
                    { id: Math.random(), fullname: lipsum.generateWords(2), avatar: 'https://picsum.photos/300/300?i=' + Math.floor(Math.random() * 6) },
                    { id: Math.random(), fullname: lipsum.generateWords(2), avatar: 'https://picsum.photos/300/300?i=' + Math.floor(Math.random() * 6) }]
            }
        ]
    }
}


