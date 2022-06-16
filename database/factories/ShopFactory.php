<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Shop>
 */
class ShopFactory extends Factory
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
            'logo' => $this->faker->imageUrl($width = 640, $height = 480),
            
            'banner' => $this->faker->imageUrl($width = 640, $height = 480),//new 
        ];
    }
}
