## Getting Started

1. Clone the application.

```bash
git clone https://github.com/Mamun-swe/google-scholar-api
```

2. Packages install via this command.

```bash
npm i
```

3. Create a .env file to the application root.

   - Copy all fields from the .env.example file & paste to .env file.

4. Test the application.

```bash
npm test
```

5. Run the application in dev mode.

```bash
npm run dev
```

6. Run the application in production mode.

```bash
npm start
```
7. http://localhost:5000/api/v1/scholar?scholar_user_id=R4hZ8WMAAAAJ click to browser the results.

### Example results

```json
{
    "status": true,
    "data": [
        {
            "title": "Worldwide trends in body-mass index, underweight, overweight, and obesity from 1975 to 2016: a pooled analysis of 2416 population-based measurement studies in 128� 9 million�…",
            "url": "",
            "authors": [
                "L Abarca-G�mez",
                " ZA Abdeen",
                " ZA Hamid",
                " NM Abu-Rmeileh",
                " ..."
            ],
            "year": 2017,
            "numCitations": 5072,
            "journal": "The lancet",
            "volume": 390,
            "issue": 10113,
            "pages": "2627-2642"
        },
        {
            "title": "Trends in adult body-mass index in 200 countries from 1975 to 2014: a pooled analysis of 1698 population-based measurement studies with 19� 2 million participants",
            "url": "",
            "authors": [
                "NCD Risk Factor Collaboration"
            ],
            "year": 2016,
            "numCitations": 4280,
            "journal": "The lancet",
            "volume": 387,
            "issue": 10026,
            "pages": "1377-1396"
        }
   ]
}
```