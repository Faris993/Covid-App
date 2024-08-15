import styled from "styled-components";

// Container with dark background and subtle shadow
export const Container = styled.div`
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
  background-color: #1e1e1e; // Dark background
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.7); // Darker shadow
  text-align: center;
`;

// Heading with bright green color
export const Heading = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 30px;
  color: #00ff00; // Vivid green
  font-weight: 700;
`;

// FormGroup with margin adjustment
export const FormGroup = styled.div`
  margin-bottom: 25px;
`;

// Label with muted grey color
export const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
  color: #aaa; // Muted grey
`;

// Select dropdown with dark background and green accents
export const Select = styled.select`
  width: 40%;
  padding: 12px;
  font-size: 1rem;
  border: 1px solid #444; // Darker border
  border-radius: 5px;
  background-color: #333; // Dark background
  color: #fff; // White text
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
  appearance: none;
  cursor: pointer;

  &:focus {
    border-color: #00ff00; // Green border on focus
  }
`;

// DateInput with dark background and green accents
export const DateInput = styled.input`
  width: 37%;
  padding: 12px;
  font-size: 1rem;
  border: 1px solid #444; // Darker border
  border-radius: 5px;
  background-color: #333; // Dark background
  color: #fff; // White text
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);

  &:focus {
    border-color: #00ff00; // Green border on focus
  }
`;

// ShowStats with dark background and green accents
export const ShowStats = styled.div`
  margin: 30px auto;
  width: 70%;
  text-align: center;
  background-color: #2c2c2c; // Dark background
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.7); // Darker shadow
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// StatGroup with spacing
export const StatGroup = styled.div`
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

// StatLabel with muted grey color
export const StatLabel = styled.div`
  font-weight: 600;
  color: #aaa; // Muted grey
`;

// StatValue with vivid green color
export const StatValue = styled.div`
  font-size: 1.25rem;

  color: ${(props) => props.color || "#00ff00"}; // Default vivid green
`;
