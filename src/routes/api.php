<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get("/todos", [TodoController::class, "index"])->name("index");

Route::post("/todos", [TodoController::class, "store"])->name("store");

Route::delete("/todos/{todo}", [TodoController::class, "destroy"])->name("destroy");