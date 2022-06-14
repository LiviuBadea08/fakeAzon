@extends('layouts.app')

@section('content')

@foreach ($products as $product)
    {{ $product->name }}
@endforeach

@endsection