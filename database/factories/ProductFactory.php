<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'name' => $this->faker->name(),
            'description' => $this->faker->text($maxNbChars = 200),//new
            'price' => $this->faker->numberBetween($min = 20, $max = 200),//new
            'picture' => $this->faker->imageUrl($width = 640, $height = 480),
            
        ];
    }
}
