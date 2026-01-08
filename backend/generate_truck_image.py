import asyncio
import os
from pathlib import Path
from dotenv import load_dotenv
from emergentintegrations.llm.openai.image_generation import OpenAIImageGeneration

# Load environment variables
load_dotenv()

async def generate_truck_image():
    """Generate a professional truck fleet image for HKS construction company"""
    
    # Get API key from environment
    api_key = os.getenv('EMERGENT_LLM_KEY', 'sk-emergent-75e4a59Eb3839F8E77')
    
    # Initialize the image generator
    image_gen = OpenAIImageGeneration(api_key=api_key)
    
    # Create detailed prompt for the image
    prompt = """Professional photograph of modern yellow and orange tipper trucks/construction lorries in a clean industrial yard environment. Multiple Sinotrucks lined up in formation. Deep blue sky background. Clean, bright, high-resolution industrial photography. The trucks should be heavy-duty construction vehicles designed for earthwork and material transport. Photorealistic, corporate photography style, well-lit, sharp details. Color scheme: Light yellow trucks with orange accents, deep blue sky."""
    
    print("Generating professional truck fleet image...")
    print(f"Prompt: {prompt}")
    
    try:
        # Generate the image
        images = await image_gen.generate_images(
            prompt=prompt,
            model="gpt-image-1",
            number_of_images=1
        )
        
        if images and len(images) > 0:
            # Save the image to frontend public folder
            output_path = Path("/app/frontend/public/truck-fleet.png")
            output_path.parent.mkdir(parents=True, exist_ok=True)
            
            with open(output_path, "wb") as f:
                f.write(images[0])
            
            print(f"✓ Image generated successfully and saved to: {output_path}")
            print(f"✓ Image size: {len(images[0])} bytes")
            return str(output_path)
        else:
            print("✗ No image was generated")
            return None
            
    except Exception as e:
        print(f"✗ Error generating image: {str(e)}")
        return None

if __name__ == "__main__":
    result = asyncio.run(generate_truck_image())
    if result:
        print(f"\n✓ Success! Use this image in your website: /truck-fleet.png")
    else:
        print("\n✗ Failed to generate image")
