from fastapi import FastAPI, HTTPException, Form, File, UploadFile
from typing import Optional
from pydantic import BaseModel
from llava.eval import eval_model
app = FastAPI()

# Assuming get_model_name_from_path is defined elsewhere
def get_model_name_from_path(model_path: str) -> str:
    return model_path.split("/")[-1]

class QueryModel(BaseModel):
    prompt: Optional[str] = None
    image_file: Optional[str] = None

@app.post("/generate/")
async def generate_response(query: QueryModel):
    # Validate input
    if not query.prompt and not query.image_file:
        raise HTTPException(status_code=400, detail="Either prompt or image_file must be provided.")

    model_path = "pjmathematician/llava-v1.6-vicuna-13b"
    args = type('Args', (), {
        "model_path": model_path,
        "model_base": None,
        "model_name": get_model_name_from_path(model_path),
        "query": query.prompt,
        "conv_mode": None,
        "image_file": query.image_file,
        "sep": ",",
        "temperature": 0,
        "top_p": None,
        "num_beams": 1,
        "max_new_tokens": 512
    })()

    response = eval_model(args)
    return {"response": response}

# Running instructions
# Run the server with: uvicorn main:app --reload
