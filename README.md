# Example how to use TypeORM with Electron using JavaScript

1. clone repository 
2. run `npm i`
3. run `npm start`
4. enjoy!

## RESTFul API
### Create a User
```bash
curl -X POST \
  http://localhost:3030/apis/users \
  -H 'Content-Type: application/json' \
  -d '{
  "firstName": "Michael",
  "lastName": "Sui",
  "isActive": true,
  "profile": {
    "about": "About Trees and Me",
    "education": "Tree School",
    "career": "Lumberjack"
  },
  "photos": [
    {
      "url": "me-and-trees.jpg",
      "description": "Me and Trees",
      "size": 100
    },
    {
      "url": "me-and-chakram.jpg",
      "description": "Me and Chakram",
      "size": 200
    }
  ]
}
'
```

### Get uers
```bash
curl -X GET \
  http://localhost:3030/apis/users \
  -H 'Accept: */*'
```