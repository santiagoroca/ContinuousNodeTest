###Node Rest Server

###/folder
This endpoint creates a new folder and returns the name.

|                       |                       |                         |       |
|-----------------------|-----------------------|-------------------------|-------|
|**Endpoint:**          |/nra/folder |**Resource Admin:**      |yes    |
|**Access:**            |private                |**Restricted endpoint:** |yes    |
|**System-role:**       |yes                    |**Method:**              |POST  |

Returns on success: application/json
```json
{
  "response": {
    "code": 201,
    "result": "success",
    "message": "Folder created.",
    "timestamp": 1436984733059,
    "errors": [],
    "data": {
      "folder_name": "foldername"
    }
  }
}
```

Returns on error: application/json
```json
{
  "response": {
    "code": 401,
    "result": "error",
    "message": "Folder not created.",
    "timestamp": 1436984733059,
    "errors": [],
    "data": {}
  }
}
```
