# Bajaj Finserv REST API

A REST API that processes arrays and returns categorized data including numbers, alphabets, special characters, and various calculations.

## Features

- **POST /bfhl** - Main endpoint for processing arrays
- Categorizes input data into odd numbers, even numbers, alphabets, and special characters
- Calculates sum of all numbers
- Generates concatenated string with alternating caps in reverse order
- Returns user ID in specified format
- Comprehensive error handling and validation

## API Endpoint

**Method:** POST  
**Route:** `/bfhl`  
**Expected Status Code:** 200 (success)

### Request Format
```json
{
  "data": ["a", "1", "334", "4", "R", "$"]
}
```

### Response Format
```json
{
  "is_success": true,
  "user_id": "sakshee_22122024",
  "email": "sakshee@xyz.com",
  "roll_number": "22BCE11597",
  "odd_numbers": ["1"],
  "even_numbers": ["334", "4"],
  "alphabets": ["A", "R"],
  "special_characters": ["$"],
  "sum": "339",
  "concat_string": "Ra"
}
```

## Installation & Setup

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Local Development
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. The API will be available at `http://localhost:3000`

### Production
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the server:
   ```bash
   npm start
   ```

## Environment Variables

- `PORT` - Server port (default: 3000)

## API Logic

1. **Input Validation**: Ensures data is an array
2. **Data Categorization**: 
   - Numbers are separated into odd and even arrays
   - Alphabets are converted to uppercase
   - Special characters are identified
3. **Calculations**:
   - Sum of all numbers (returned as string)
   - Concatenated string with alternating caps in reverse order
4. **User ID Generation**: Format: `{full_name_ddmmyyyy}`

## Error Handling

- Input validation errors return 400 status
- Server errors return 500 status
- All errors include `is_success: false` and error message

## Testing

Test the API with the provided examples:

### Example A
```bash
curl -X POST http://localhost:3000/bfhl \
  -H "Content-Type: application/json" \
  -d '{"data": ["a","1","334","4","R", "$"]}'
```

### Example B
```bash
curl -X POST http://localhost:3000/bfhl \
  -H "Content-Type: application/json" \
  -d '{"data": ["2","a", "y", "4", "&", "-", "*", "5","92","b"]}'
```

### Example C
```bash
curl -X POST http://localhost:3000/bfhl \
  -H "Content-Type: application/json" \
  -d '{"data": ["A","ABcD","DOE"]}'
```

## Deployment

This API can be deployed to various platforms:

- **Vercel**: Supports Node.js APIs
- **Railway**: Easy deployment with automatic scaling
- **Render**: Free tier available for APIs
- **Heroku**: Traditional hosting platform

## Author

Sakshee - 22BCE11597
