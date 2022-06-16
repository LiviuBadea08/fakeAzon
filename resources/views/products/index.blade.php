@extends('layouts.app')

@section('content')

@foreach ($products as $product)
    {{ $product->name }}
    <a href={{ route('products.edit', $product) }}>edit</a>
@endforeach

@endsection