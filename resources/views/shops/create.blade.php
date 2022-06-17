@extends('layouts.app')

@section('content')
<div class="container">
    <form method="POST" action="{{ route('shops.store') }}" class="my-4">
        @csrf
        <div id="create-shop" title="Crear Tienda" name="" logo="" banner=""></div>
    </form>
</div>
@endsection