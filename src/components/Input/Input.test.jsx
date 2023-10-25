import { render, screen } from '@testing-library/react'
import Input from './Input.tsx'
import "@testing-library/jest-dom/extend-expect";

describe('Input components', () => {
    test('Input renders with label & placeholder', () => {
        const { getByLabelText, getByPlaceholderText } = render(
          <Input
            label="Email"
            placeholder="Your email"
            value=""
            // onChange={() => {}}
          />
        );

        expect(getByPlaceholderText('Your email')).toBeInTheDocument()
    })
})
