<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Node extends Model
{
    use HasFactory;

    // Table Name
    protected $table = 'nodes';
    // Primary Key
    public $primaryKey = 'id';
    // Timestamps
    public $timestamps = false;
<<<<<<< HEAD
=======

    public function Node_World()
    {
        return $this->hasMany('App\Models\World');
    }
>>>>>>> 16f740117b6d8684e2edb3548c3131cb6485d8e8
}
